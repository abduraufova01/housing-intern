import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icon/beds.svg";
import { ReactComponent as bath } from "../../assets/icon/bath.svg";
import { ReactComponent as garage } from "../../assets/icon/car.svg";
import { ReactComponent as ruler } from "../../assets/icon/ruler.svg";
import { ReactComponent as love } from "../../assets/icon/love1.svg";
import { ReactComponent as resize } from "../../assets/icon/pin.svg";
export const Container = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  max-width: 380px;
  height: 450px;
  background: #ffffff;
  margin: ${({ margin }) => margin && "0 1em"};
  margin-bottom: 10px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  :hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
`;

const Image = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;
  border: 1px solid #e6e9ec;
`;

const Info = styled.div``;

Info.Title = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-style: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

Info.Text = styled.div`
  display: flex;
  white-space: normal;

  overflow: hidden;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

Info.Detailes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

const Icons = styled.div``;

Icons.Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: fit-content;
  height: 45px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border: 1px solid #e6e9ec;
  padding: 10px 25px;
`;

Price.Wrapper = styled(InfoWrapper)`
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

Price.IconWrapper = styled(InfoWrapper)`
  border: none;
  flex-direction: row;
  align-items: center;
  padding: 0;
  display: flex;
`;

Price.Origin = styled(Info.Title)``;
Price.Sale = styled(Info.Text)`
  line-height: 1;
  font-weight: 200;
  text-decoration: line-through;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  cursor: pointer;
`;

Icons.Love = styled(love)`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  cursor: pointer;
  :active {
    transform: scale(0.97);
  }
`;

const User = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  right: 20px;
  top: -23px;
  border-radius: 50%;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
  overflow: hidden;
`;

User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;
export { Image, Info, InfoWrapper, Icons, Price, User };
