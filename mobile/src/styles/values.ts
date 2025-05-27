import { Appearance } from 'react-native';

const colorScheme = Appearance.getColorScheme();

export const designSystemColours = {
  // Sky Colors
  Sky: '#73A1F2',
  Sky25: '#4B6283',
  TFBlue: '#1C70ED',
  TFBlue20: '#A4C6F8',
  TFBlue30: '#77A9F4',
  TFBlue40: '#498DF1',
  TFBlue70: '#11438E',

  // Accent Colors
  Pine40: '#6D998D',
  Evergreen: '#163D44',
  Chilli: '#BF3535',
  Chilli30: '#D98686',
  Chilli20: '#E5AEAE',
  Chilli40: '#CC5D5D',

  // Neutral Colors
  Cotton: '#FFFFFF',
  CottonDisabled: '#EAEAEA',
  Smoke: '#ECEDE9',
  Smoke30: '#F4F4F2',
  Smoke60: '#BDBEBA',
  Coast: '#B4B8AB',
  Coast30: '#D2D4CD',
  Coast60: '#909389',
  Coast70: '#6C6E67',
  Charcoal: '#313131',
  CharcoalDisabled: '#313131',
  Charcoal60: '#282828',
  Charcoal10: '#D6D6D6',
  Charcoal40: '#5A5A5A',
  Charcoal46: '#464646',
  Charcoal70: '#1D1D1D',
};

export const scheme = {
  background1:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal70
      : designSystemColours.Smoke,
  header1:
    colorScheme === 'dark'
      ? designSystemColours.Smoke
      : designSystemColours.Evergreen,
  body1:
    colorScheme === 'dark'
      ? designSystemColours.Smoke
      : designSystemColours.Charcoal,
  header2:
    colorScheme === 'dark'
      ? designSystemColours.Smoke
      : designSystemColours.Cotton,
  body2:
    colorScheme === 'dark'
      ? designSystemColours.Smoke
      : designSystemColours.Cotton,
  panel1:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal
      : designSystemColours.Cotton,
  panel2:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal
      : designSystemColours.Smoke,
  panel1Disabled:
    colorScheme === 'dark'
      ? designSystemColours.CharcoalDisabled
      : designSystemColours.CottonDisabled,
  headerPanel:
    colorScheme === 'dark'
      ? designSystemColours.Smoke
      : designSystemColours.Charcoal,
  bodyPanel:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal10
      : designSystemColours.Charcoal40,
  placeholder: designSystemColours.Coast60,
  outline1:
    colorScheme === 'dark'
      ? designSystemColours.Coast70
      : designSystemColours.Coast,
  primary:
    colorScheme === 'dark'
      ? designSystemColours.Sky
      : designSystemColours.TFBlue,
  primaryLabel:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal70
      : designSystemColours.Cotton,
  link:
    colorScheme === 'dark'
      ? designSystemColours.TFBlue20
      : designSystemColours.TFBlue,
  disabled:
    colorScheme === 'dark'
      ? designSystemColours.Sky25
      : designSystemColours.TFBlue20,
  disabledLabel:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal70
      : designSystemColours.Cotton,
  disabledPanelLabel:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal40
      : designSystemColours.Coast,
  secondary:
    colorScheme === 'dark'
      ? designSystemColours.Sky
      : designSystemColours.TFBlue,
  secondaryLabel:
    colorScheme === 'dark'
      ? designSystemColours.Cotton
      : designSystemColours.TFBlue,
  secondaryLabelOnDark: designSystemColours.Cotton,
  accent1:
    colorScheme === 'dark'
      ? designSystemColours.TFBlue20
      : designSystemColours.TFBlue,
  accent2: designSystemColours.Coast,
  toolbar1:
    colorScheme === 'dark'
      ? designSystemColours.TFBlue20
      : designSystemColours.Evergreen,
  toolbar2:
    colorScheme === 'dark'
      ? designSystemColours.TFBlue20
      : designSystemColours.Smoke,
  error:
    colorScheme === 'dark'
      ? designSystemColours.Chilli30
      : designSystemColours.Chilli,
};

export const accent = {
  loadingText:
    colorScheme === 'dark'
      ? designSystemColours.Charcoal
      : designSystemColours.Smoke,
  iconYellow: '#F3C586',
  iconGreen: '#498070',
  iconRed: '#F5B8C4',
  iconBlue: '#D2E2FB',
  iconGrey: '#808080',
  iconDefault: designSystemColours.Charcoal70,
};

export const fonts = {
  // Lora Font Variants
  loraRegular: 'Lora-Regular', // Name as defined inside font file
  loraBold: 'Lora-Bold',
  loraItalic: 'Lora-Italic',
  loraBoldItalic: 'Lora-BoldItalic',
  loraMedium: 'Lora-Medium',
  loraMediumItalic: 'Lora-MediumItalic',
  loraSemiBold: 'Lora-SemiBold',
  loraSemiBoldItalic: 'Lora-SemiBoldItalic',

  // RedHatText Font Variants
  redhatRegular: 'RedHatText-Regular',
  redhatBold: 'RedHatText-Bold',
  redhatItalic: 'RedHatText-Italic',
  redhatBoldItalic: 'RedHatText-BoldItalic',
  redhatMedium: 'RedHatText-Medium',
  redhatMediumItalic: 'RedHatText-MediumItalic',
  redhatSemiBold: 'RedHatText-SemiBold',
  redhatSemiBoldItalic: 'RedHatText-SemiBoldItalic',
  redhatLight: 'RedHatText-Light',
  redhatLightItalic: 'RedHatText-LightItalic',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 16,
};

export const typography = {
  title: {
    fontFamily: fonts.loraMedium,
    fontSize: 36,
    lineHeight: 46,
    fontWeight: 500 as unknown as '500',
  },
  secondaryTitle: {
    fontFamily: fonts.loraMedium,
    fontSize: 30,
    lineHeight: 40,
    fontWeight: 500 as unknown as '500',
  },
  paragraph: {
    fontFamily: fonts.redhatRegular,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400 as unknown as '400',
  },
  paragraphBold: {
    fontFamily: fonts.redhatBold,
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 700 as unknown as '700',
  },
  paragraphSmall: {
    fontFamily: fonts.redhatRegular,
    fontSize: 16,
    lineHeight: 26,
  },
  paragraphSmallBold: {
    fontFamily: fonts.redhatBold,
    fontSize: 16,
    lineHeight: 26,
  },
  caption: {
    fontFamily: fonts.redhatSemiBold,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 600 as unknown as '600',
  },
  button: {
    fontFamily: fonts.redhatSemiBold,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 600 as unknown as '600',
  },
  cardStatus: {
    fontFamily: fonts.redhatRegular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400 as unknown as '400',
  },
  errorTitle: {
    fontFamily: fonts.redhatSemiBold,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 600 as unknown as '600',
  },
  errorBody: {
    fontFamily: fonts.redhatRegular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400 as unknown as '400',
  },
  clickableText: {
    fontFamily: fonts.redhatSemiBold, // TODO should be Body/Text link
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 600 as unknown as '600',
  },
  smallRegular: {
    fontFamily: fonts.redhatRegular,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400 as unknown as '400',
  },
};
