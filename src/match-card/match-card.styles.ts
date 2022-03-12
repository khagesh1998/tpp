import {StyleSheet} from 'react-native';

const colors = {
  BACKGROUND: '#fff',
  DIVIDER: '#f5f5f5',

  PRIMARY: '#1a1a1a',
  SECONDARY: '#797979',
  TERNARY: '#109E38',

  RED: '#e10000',
};

const BORDER_RADIUS = 8;

export const styles = StyleSheet.create({
  container: {
    height: 128,
    width: '100%',
    backgroundColor: colors.BACKGROUND,
    borderRadius: BORDER_RADIUS,
    elevation: 5,
  },
  /** ------------------------------------ header ------------------------------------ */
  hContainer: {
    height: 32,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  hTitle: {
    marginRight: 'auto',
    color: colors.SECONDARY,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  hIcon: {
    height: 20,
    width: 20,
  },
  hLineUps: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    marginRight: 16,
    color: colors.TERNARY,
  },
  hLineUpsIcon: {
    marginRight: 4,
    height: 16,
    width: 16,
  },
  divider: {
    position: 'absolute',
    height: 1,
    left: 12,
    right: 12,
    bottom: 0,
    backgroundColor: colors.DIVIDER,
  },
  /** ------------------------------------ Title ------------------------------------ */
  tContainer: {
    paddingHorizontal: 12,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 16,
  },
  tText: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: colors.PRIMARY,
  },
  /** ------------------------------------ Main ------------------------------------ */
  mContainer: {
    height: 34,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
    marginBottom: 5,
  },
  mLeft: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
  },
  mCenter: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '700',
    color: colors.RED,
  },
  mRight: {
    height: 34,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mFlagIcon: {
    width: 31,
    height: 31,
    margin: 3,
  },
  mFlagSHortName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    color: colors.PRIMARY,
    marginHorizontal: 4,
  },
  mLeftGradient: {
    height: 20,
    width: 24,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    left: 0,
  },
  mRightGradient: {
    height: 20,
    width: 24,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    right: 0,
  },
  /** ------------------------------------ Footer ------------------------------------ */
  fContainer: {
    height: 32,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.DIVIDER,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  fLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  fRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fTextWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  fContestWrapper: {
    marginLeft: 16,
  },
  fCount: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.PRIMARY,
  },
  fText: {
    marginLeft: 4,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '500',
    color: colors.SECONDARY,
  },
  fLineUpsIcon: {
    width: 16,
    height: 16,
    marginLeft: 16,
  },
});
