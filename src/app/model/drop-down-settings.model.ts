import { DropdownSettings } from 'angular2-multiselect-dropdown/lib/multiselect.interface';

export class DropDownSettingsModel implements DropdownSettings {
  addNewButtonText: string;
  addNewItemOnFilter: boolean;
  autoPosition: boolean;
  badgeShowLimit: number;
  classes: string;
  clearAll: boolean;
  disabled: boolean;
  enableCheckAll: boolean;
  enableFilterSelectAll: boolean;
  enableSearchFilter: boolean;
  escapeToClose: boolean;
  filterSelectAllText: string;
  filterUnSelectAllText: string;
  groupBy: string;
  labelKey: string;
  lazyLoading: boolean;
  limitSelection: number;
  loading: boolean;
  maxHeight: number;
  noDataLabel: string;
  position: string;
  primaryKey: string;
  searchAutofocus: boolean;
  searchBy: string[];
  searchPlaceholderText: string;
  selectAllText: string;
  selectGroup: boolean;
  showCheckbox: boolean;
  singleSelection: boolean;
  text: string;
  unSelectAllText: string;
}
