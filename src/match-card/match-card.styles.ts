import {StyleSheet} from 'react-native';

const colors = {
  BACKGROUND: '#fff',
  DIVIDER: '#f5f5f5',

  PRIMARY: '#1a1a1a',
  SECONDARY: '#797979',
  TERNARY: '#109E38',
};

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.BACKGROUND,
    borderRadius: 8,
    elevation: 5,
  },
  /** ------------------------------------ header ------------------------------------ */
  hContainer: {
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
    backgroundColor: colors.SECONDARY,
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
    backgroundColor: colors.SECONDARY,
  },
  /** ------------------------------------ divider ------------------------------------ */
  divider: {
    backgroundColor: colors.DIVIDER,
    height: 1,
    borderRadius: 1 / 2,
    marginHorizontal: 12,
  },
  /** ------------------------------------ Footer ------------------------------------ */
  fContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    backgroundColor: colors.SECONDARY,
  },
});
