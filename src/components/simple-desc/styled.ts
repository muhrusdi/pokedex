import { Modal } from "antd";
import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeroTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 44px;
  margin: 0;
  span {
    color: #ef5350;
  }
`;

export const ListStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListDesc = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  li {
    padding: 0 14px;
    a {
      color: #808080;
      text-transform: uppercase;
    }
  }
`;

export const Header = styled.header`
  padding: 20px 0;
`;

export const ModalStyled = styled(Modal)`
  &&& {
    .ant-modal-content {
      background: #03970c;
      padding: 24px 20px;
      border-radius: 20px;
      .ant-modal-body {
        padding: 0;
      }
    }
    .ant-modal-close {
      .ant-modal-close-x {
        line-height: 2.6;
      }
      cursor: pointer;
      line-height: 1;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 500px;
  h2 {
    color: #fff;
  }
`;

export const ModalContentDesc = styled.div`
  background: #fff;
  padding: 20px;
  margin-top: 16px;
  border-radius: 14px;
  width: 100%;
`;

export const ModalListDesc = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 12px 0;
    &:not(:first-of-type) {
      border-top: 1px solid #dcdcdc;
    }
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
`;

export const SeeDetail = styled.button`
  padding: 0 20px;
  height: 42px;
  border-radius: 24px;
  border: 1px solid #fff;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

export const ButtonClose = styled.button`
  background: #dedede;
  border-radius: 50%;
  border: none;
  width: 40px;
  position: absolute;
  cursor: pointer;
  right: 20px;
  top: 20px;
  height: 40px;
  line-height: 1;
`;
