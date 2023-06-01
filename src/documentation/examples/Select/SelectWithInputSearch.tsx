import React from 'react'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Select' or its c... Remove this comment to see the full error message
import Select from '@bufferapp/ui/Select'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Search' or its c... Remove this comment to see the full error message
import Search from '@bufferapp/ui/Search'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { Search as SearchIcon } from '@bufferapp/ui/Icon'

const searchBarWrapperStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  borderRadius: '4px',
  padding: '5px 8px 4px 8px',
  border: '1px solid #B8B8B8',
  color: '#636363',
  backgroundColor: '#FFFFFF',
  boxShadow: '2px 2px 0 2px transparent',
  transitionProperty: 'border-width, border-color, box-shadow',
  transitionDuration: '0.1s',
  transitionTimingFunction: 'ease-in',
}

/** With Input search */
export default function ExampleSelectWithInputSearch() {
  return (
    <Select
      onSelectClick={() => true}
      // @ts-expect-error TS(7006) FIXME: Parameter 'onButtonClick' implicitly has an 'any' ... Remove this comment to see the full error message
      customButton={(onButtonClick, onSearchChange) => (
        // @ts-expect-error TS(2322) FIXME: Type '{ width: string; display: string; alignItems... Remove this comment to see the full error message
        <div style={searchBarWrapperStyle}>
          <SearchIcon />
          <Search
            onClick={onButtonClick}
            onChange={onSearchChange}
            height="small"
            placeholder="Search Profiles"
            isOpen
          />
        </div>
      )}
      isInputSearch
      hideSearch
      capitalizeItemLabel={false}
      hasCustomAction={false}
      noResultsCustomMessage="No Profiles Found"
      items={[
        { id: '1', title: 'hamish' },
        { id: '2', title: 'juliana' },
        { id: '3', title: 'joel' },
      ]}
    />
  )
}
