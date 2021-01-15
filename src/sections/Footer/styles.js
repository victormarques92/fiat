import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import Colors from '../../styles/colors';

export const Container = styled.section`
  display: block;
  margin: 0 auto;
  padding: 44px calc(((100% - 1140px) / 2) + 100px) 16px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SocialItem = styled.a`
  align-items: center;
  color: ${Colors.white};
  display: inline-flex;
  font-size: 24px;
  height: 45px;
  justify-content: center;
  transition: 0.3s ease-in-out;
  width: 50px;

  &:hover {
    ${switchProp('title', {
      facebook: css`
        background-color: #3d5b99;
      `,
      instagram: css`
        background-color: #833ab4;
      `,
      twitter: css`
        background-color: #00aced;
      `,
      youtube: css`
        background-color: #e64a41;
      `,
    })}
  }
`;

export const Text = styled.p`
  color: ${Colors.white};
  font-size: 15px;
  line-height: 16px;
  text-align: center;
`;
