/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Dimensions, PixelRatio, Platform as PlatformBase, TextStyle } from 'react-native';

const { width, height } = Dimensions.get('window');

class PlBase {
  readonly deviceWidth = width;
  readonly deviceHeight = height;
  readonly platform = PlatformBase.OS;
  readonly borderWidth = 1.5 / PixelRatio.getPixelSizeForLayoutSize(1);
  readonly baseScreenWith = 375;
  readonly baseScreenHeight = 667;
  readonly select = PlatformBase.select;
  readonly OS = PlatformBase.OS;
  readonly SizeScale = (size = 12): number => {
    const scaleWidth = this.deviceWidth / this.baseScreenWith;
    const scaleHeight = this.deviceHeight / this.baseScreenHeight;
    const scale = Math.min(scaleWidth, scaleHeight);
    return Math.ceil(
      scale *
        (size +
          PlatformBase.select({
            ios: 0,
            android: 1,
            default: 0,
          })),
    );
  };
  readonly headerHeight = this.SizeScale(50);
  readonly version = PlatformBase.Version;
  textBase: TextStyle = {
    fontSize: this.SizeScale(14),
    fontFamily: 'RobotoMono-Regular',
  };
}

export const Platform = new PlBase();
