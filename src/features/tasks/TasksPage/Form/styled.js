import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background: ${({ theme }) => theme.color.teal};
  color: ${({ theme }) => theme.color.white};
  border: none;
  transition: 0.6s;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
  }
`;
