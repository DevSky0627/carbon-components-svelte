/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeaderActionSearchProps {
  /**
   * Set to `true` to focus the search
   * @default false
   */
  searchIsActive?: boolean;
}

/**
 * @deprecated
 * This component is deprecated. Use `HeaderSearch` instead.
 */
export default class HeaderActionSearch extends SvelteComponentTyped<
  HeaderActionSearchProps,
  {
    inputSearch: CustomEvent<{ action: "search"; textInput: string }>;
    focusInputSearch: CustomEvent<any>;
    focusOutInputSearch: CustomEvent<any>;
  },
  {}
> {}
