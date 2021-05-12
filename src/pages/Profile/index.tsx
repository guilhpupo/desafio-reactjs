import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import LeftMenu, { UserProps } from "components/LeftMenu";
import Repository, { RepositoryProps } from "components/Repository";

import { findRepositories } from "services/RepositoryService";
import { findUserData } from "services/UserService";
import { countStars, sortRepos } from "utils";
import MediaMatch from "utils/MediaMatch";

import { Wrapper, RepositoriesSection, RepositoriesList } from "./styles";

import FullScreenMenu from "components/FullScreenMenu";

const Profile = () => {
  const [userData, setUserData] = useState<UserProps>({
    avatar: "",
    devLogin: "",
    devName: "",
    followers: 0,
    following: 0,
  });
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);
  const [repositoriesError, setRepositoriesError] = useState<string>();

  const { username } = useParams<{ username: string }>();

  useEffect(() => {
    async function handleRepositories() {
      try {
        let repositoriesList = await findRepositories(username);

        repositoriesList = sortRepos(repositoriesList);
        repositoriesList.forEach((repo: RepositoryProps) =>
          setRepositories((repositories) => [...repositories, repo])
        );
      } catch (error) {
        setRepositoriesError(error.message);
      }
    }
    handleRepositories();
  }, [username]);

  useEffect(() => {
    async function handleUserData() {
      try {
        const user = await findUserData(username);
        const stars = countStars(repositories);
        setUserData({ ...user, stars });
      } catch (error) {
        setUserData(error);
      }
    }
    handleUserData();
  }, [repositories, username]);

  return (
    <Wrapper>
      <MediaMatch showOnDesktop>
        <LeftMenu {...userData} />
      </MediaMatch>

      <MediaMatch showOnMobo>
        <FullScreenMenu {...userData} />
      </MediaMatch>

      <RepositoriesSection>
        {!!repositoriesError && <p>{repositoriesError}</p>}
        {!!repositories && (
          <RepositoriesList>
            {repositories.map((repository, index) => (
              <Repository key={index} {...repository} />
            ))}
          </RepositoriesList>
        )}
      </RepositoriesSection>
    </Wrapper>
  );
};

export default Profile;
