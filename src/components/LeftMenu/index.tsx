import { Link } from "react-router-dom";

import DevName from "components/DevName";
import DevNumber from "components/DevNumber";
import DevLink from "components/DevLink";
import Button from "components/Button";

import {
  Wrapper,
  InfoSection,
  AvatarSection,
  Avatar,
  NameSection,
  BioSection,
  DevNumbersList,
  LinksSection,
  DevLinksList,
  BackButtonSection,
} from "./styles";

import {
  Heart as HeartIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Organization as OrganizationIcon,
  Location as LocationIcon,
  Mail as MailIcon,
  Link as LinkIcon,
} from "@styled-icons/octicons";

import {
  Twitter as TwitterIcon,
} from "@styled-icons/feather";

export type UserProps = {
  avatar: string;
  devName: string;
  devLogin: string;
  devBio?: string;
  followers: number;
  following: number;
  stars?: number;
  organization?: string;
  location?: string;
  email?: string;
  website?: string;
  twitter?: string;
};

const LeftMenu = ({ ...props }: UserProps) => {
  return (
    <Wrapper>
      <InfoSection>
        <AvatarSection>
          <Avatar src={props.avatar} />
        </AvatarSection>

        <NameSection>
          <DevName>{props.devName}</DevName>
          <DevName isLogin={true}>@{props.devLogin}</DevName>
        </NameSection>
        {!!props.devBio && (
          <BioSection>
            <p>{props.devBio}</p>
          </BioSection>
        )}

        <DevNumbersList>
          <DevNumber icon={<PeopleIcon />}>
            {props.followers} followers
          </DevNumber>
          <DevNumber icon={<HeartIcon />}>
            {props.following} following
          </DevNumber>
          <DevNumber icon={<StarIcon />}>{props.stars} stars</DevNumber>
        </DevNumbersList>

        <LinksSection>
          <DevLinksList>
            {!!props.organization && (
              <DevLink icon={<OrganizationIcon />}>
                {props.organization}
              </DevLink>
            )}
            {!!props.location && (
              <DevLink icon={<LocationIcon />}>{props.location}</DevLink>
            )}
            {!!props.email && (
              <DevLink
                asLink
                icon={<MailIcon />}
                href={"mailto:" + props.email}
              >
                {props.email}
              </DevLink>
            )}
            {!!props.website && (
              <DevLink asLink icon={<LinkIcon />} href={props.website}>
                {props.website.split("//")[1]}
              </DevLink>
            )}
            {!!props.twitter && (
              <DevLink
                asLink
                icon={<TwitterIcon />}
                href={"https://twitter.com/" + props.twitter}
              >
                @{props.twitter}
              </DevLink>
            )}
          </DevLinksList>
        </LinksSection>
      </InfoSection>

      <BackButtonSection>
        <Link to="/">
          <Button color="light" size="small">
            Voltar
          </Button>
        </Link>
      </BackButtonSection>
    </Wrapper>
  );
};

export default LeftMenu;
