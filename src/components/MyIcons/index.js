import React from 'react';
import styles from './styles';

import IconHouse from "../../assets/icons/house.svg";
import IconUser from "../../assets/icons/user.svg";
import IconUsers from "../../assets/icons/users.svg";
import IconMachine from "../../assets/icons/machine.svg";
import IconMoney from "../../assets/icons/money.svg";
import IconGear from "../../assets/icons/gear.svg";
import IconOut from "../../assets/icons/out.svg";
import IconClose from "../../assets/icons/close.svg";
import IconSite from "../../assets/icons/site.svg";
import IconPodcast from "../../assets/icons/podcast.svg";
import IconYoutube from "../../assets/icons/youtube.svg";
import IconArrowCircleRight from "../../assets/icons/arrow_circle_right.svg";

const MyIcons = ({
  iconName,
  iconColor,
  btnSizeType,
  widthIcon,
  heightIcon,
}) => {

  const iconSizeMonut = () => {
    if (btnSizeType === 'small') {
      return '15'
    } else if (btnSizeType === 'medium') {
      return '18'
    } else if (btnSizeType === 'large') {
      return '25'
    } else {
      return '20'
    }
  }

  const getIcons = () => {
    if (iconName && iconName == 'house') {
      return <IconHouse
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'user') {
      return <IconUser
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'users') {
      return <IconUsers
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'machine') {
      return <IconMachine
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'money') {
      return <IconMoney
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'gear') {
      return <IconGear
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else if (iconName && iconName == 'out') {
      return <IconOut
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    }else if (iconName && iconName == 'close') {
      return <IconClose
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    }else if (iconName && iconName == 'site') {
      return <IconSite
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    }else if (iconName && iconName == 'podcast') {
      return <IconPodcast
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    }else if (iconName && iconName == 'youtube') {
      return <IconYoutube
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    }else if (iconName && iconName == 'arrow_circle_right') {
      return <IconArrowCircleRight
        style={[
          styles.icon,
          (iconColor) && { 'color': iconColor },
        ]}
        width={(btnSizeType) ? iconSizeMonut() : widthIcon}
        height={(btnSizeType) ? iconSizeMonut() : heightIcon}
      />
    } else {
      return null
    }
  }
  return (
    <>
      {getIcons()}
    </>
  );
};

export default MyIcons;
