import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Segment = styled.div`
  width: 40%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 0px;
  z-index: 0;

  .resize {
    width: 100px;
    height: auto;
}

  button {
    margin-left: auto;
    margin-top: 50px;
    z-index: 0;

  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 0px;
  z-index: 0;

  
  .resize {
    width: 400px;
    height: auto;
}

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const Header = styled.img`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 50px;
  z-index: 0;

  
  .resize {
    width: 400px;
    height: auto;
}

  button {
    margin-left: auto;
    margin-top: 50px;
    z-index: 0;

  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 0;


  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  z-index: 0;

`;