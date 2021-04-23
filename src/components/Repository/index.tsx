import * as S from "./styles";

import { Star as StarIcon } from "@styled-icons/octicons/Star";
import { DotFill as DotFillIcon } from "@styled-icons/octicons/DotFill";

export type RepositoryProps = {
  name: string;
  description?: string;
  stars: number;
  updateAt: string;
};
const Repository = ({
  name,
  description = "This repository has no description.",
  stars,
  updateAt,
}: RepositoryProps) => (
  <S.Wrapper>
    <S.Name>{name}</S.Name>
    <S.Description>{description}</S.Description>
    <S.Numbers><StarIcon /> {stars} stars <DotFillIcon /> Updated {updateAt}</S.Numbers>
  </S.Wrapper>
);

export default Repository;
