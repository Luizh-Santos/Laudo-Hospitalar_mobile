import { Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles/index.js';

const { width } = Dimensions.get('window');
const PHONE_MAX_WIDTH = 430;
const BASE_WIDTH = 390;
const usableWidth = Math.min(width, PHONE_MAX_WIDTH);
const widthRatio = usableWidth / BASE_WIDTH;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const scale = (value, min = value * 0.86, max = value) =>
  Math.round(clamp(value * widthRatio, min, max));

export const styles = StyleSheet.create({
  filterOverlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: scale(16, 12, 18),
  },

  filterBackdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 26, 32, 0.28)',
  },

  filterModal: {
    width: '100%',
    maxWidth: 390,
    maxHeight: '86%',
    backgroundColor: '#F4F4F4',
    borderWidth: 1,
    borderColor: '#D8E0E5',
    borderRadius: 18,
    padding: scale(16, 14, 18),
    elevation: 12,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
  },

  filterHeader: {
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  filterTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#2F2F2F',
    textTransform: 'uppercase',
  },

  filterClose: {
    position: 'absolute',
    right: 0,
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterScroll: {
    maxHeight: 440,
  },

  filterContent: {
    gap: 14,
    paddingBottom: 4,
  },

  filterCard: {
    backgroundColor: colors.white,
    borderWidth: 1.4,
    borderColor: '#496173',
    borderRadius: 16,
    padding: scale(14, 12, 16),
  },

  filterLabel: {
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#353535',
  },

  filterSegment: {
    flexDirection: 'row',
    gap: 8,
  },

  filterSegmentItem: {
    flex: 1,
    minHeight: 42,
    borderRadius: 12,
    backgroundColor: '#EEF3F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },

  filterSegmentItemActive: {
    backgroundColor: colors.primary,
  },

  filterSegmentText: {
    fontSize: 13,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
  },

  filterSegmentTextActive: {
    color: colors.white,
  },

  filterSelect: {
    minHeight: 46,
    borderRadius: 14,
    backgroundColor: '#F7F9FA',
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  filterSelectText: {
    flex: 1,
    fontSize: 14,
    color: '#626A70',
  },

  filterDropdown: {
    marginTop: 10,
    maxHeight: 180,
    borderWidth: 1,
    borderColor: '#E3E9ED',
    borderRadius: 14,
    overflow: 'hidden',
    backgroundColor: colors.white,
  },

  filterDropdownItem: {
    minHeight: 42,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F3',
  },

  filterDropdownItemSelected: {
    backgroundColor: '#EDF5F7',
  },

  filterDropdownText: {
    flex: 1,
    fontSize: 13,
    fontWeight: '600',
    color: '#35444E',
  },

  filterActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginTop: 18,
  },

  filterButton: {
    minWidth: 110,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  filterButtonSecondary: {
    backgroundColor: '#DEDCDC',
  },

  filterButtonPrimary: {
    backgroundColor: colors.primary,
  },

  filterButtonSecondaryText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '800',
  },

  filterButtonPrimaryText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '800',
  },
});
