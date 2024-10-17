import {createGlobalStyle} from 'styled-components';
import Colors from './colors';
import {font_body_2_bold} from 'theme/fonts';

const {blue100, gray050, gray070, gray000} = Colors;

export const OverrideStyles = createGlobalStyle`
  // ------------- Pagination ------------- //
  .MuiPagination-root {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    li button.MuiPaginationItem-root {
      ${font_body_2_bold};
      color: ${({theme}) => theme.colors.gray090};
      border-radius: 50%;
      height: 3rem;
      width: 3rem;

      &.Mui-selected {
        color: ${({theme}) => theme.colors.gray100};
        background-color: ${({theme}) => theme.colors.gray050};
      }
    }

    .MuiSvgIcon-root {
      font-size: 1.5rem;
      fill: ${({theme}) => theme.colors.gray100};
    }
  }

  // ------------- ScrollBar ------------- //
  &::-webkit-scrollbar {
    width: 0.35rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${gray070};
  }

  // ------------- BaseNotification ------------- //
  .Toastify {
    &__toast {
      padding: 0 0 5px 0 !important;

      &-body {
        display: flex;
        background: ${gray000} !important;
        padding: 15px 20px 10px 15px !important;
        margin: 0 !important;
        align-items: center;
      }

      &-container--top-right {
        top: 0.8em !important;
        right: 0.8em !important;
      }
    }

    &__close-button {
      color: rgb(21, 24, 25) !important;
      opacity: .3 !important;
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  // ------------- BaseSelector ------------- //
  div.MuiSelect-select {
    display: flex;
    align-items: center;
  }

  .MuiInputBase-root {
    &:has(.MuiSelect-select) {
      &.Mui-disabled {
        fieldset.MuiOutlinedInput-notchedOutline {
          background: ${gray050};
        }
      }
    }
  }

  .MuiMenu-root.selector-dropdown {
    .MuiPaper-root {
      border-radius: 12px;
      margin-top: 0.25rem;
    }

    .MuiMenu-list {
      padding: 0.5rem;
    }
  }

  li[class*='MuiMenuItem-root'] svg {
    margin-right: 8px;
  }

  // ------------- BaseSwitch ------------- //
  .MuiSwitch-root {
    & > span {
      &.Mui-checked {
        color: ${blue100};

        & + .MuiSwitch-track {
          background-color: ${blue100};
        }
      }
    }
  }

  // ------------- BaseTabs ------------- //
  button.MuiTab-root.Mui-selected {
    color: rgb(21, 24, 25);

    svg.MuiSvgIcon-root {
      fill: rgb(21, 24, 25);
    }
  }

  span.MuiTabs-indicator {
    background-color: ${blue100};
  }

  // ------------- BaseMultiAutocomplete ------------- //
  .MuiAutocomplete-root {
    .MuiAutocomplete-tag.MuiChip-root {
      margin: 0;
    }
  }

  // ------------- BaseInputErrors ------------- //
  .MuiFormHelperText-root {
    max-width: 21.5625rem;
  }

  // ------------- Animations ------------- //
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @keyframes hideError {
    0% {
      opacity: 0;
      transform: translateX(8px);
    }
    20% {
      opacity: 1;
      transform: translateX(0);
    }
    80% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(8px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    25% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    75% {
      transform: scale(1.1);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes bounce {
    0%, 75%, 100% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-6px);
    }
  }
`;
