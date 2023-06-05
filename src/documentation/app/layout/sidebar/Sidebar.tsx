/* eslint-disable no-nested-ternary */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// @ts-expect-error TS(2307) FIXME: Cannot find module '@bufferapp/ui/Icon' or its cor... Remove this comment to see the full error message
import { ChevronDown, ChevronUp } from '@bufferapp/ui/Icon'
import helper from 'immutability-helper'

const SidebarWrapper = styled.div`
  z-index: 15;
  background: #f5f7f9;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 250px;
  overflow-x: hidden;
  height: calc(100vh - 65px);
  padding: 0 0 0 1rem;
  border-right: 1px solid #e6ecf1;
  overflow-y: auto;
`

const SidebarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  display: block;
  margin: 0px;
  padding: 0px;
  width: 100%;
  padding-bottom: 24px;
  font-size: 15px;
  margin-top: 32px;
  transform: translateX(1px);
`

const SidebarListItem = styled.li<{ isSelected: boolean; level: number }>`
  text-decoration: none;
  color: #636363;
  margin-left: 0px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  cursor: pointer;
  padding-left: ${(props): string => (props.level === 1 ? '20px' : '12px')};
  &:hover {
    background: #ffffff77;
    border-radius: 4px 0 0 4px;
  }
  background: ${(props): string => (props.isSelected ? '#fff' : 'none')};
`

const SidebarListItemLink = styled(Link)<{
  'data-is-child'?: boolean
  'data-is-selected': boolean
}>`
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${(props): string =>
    props['data-is-child'] && !props['data-is-selected'] ? '500' : '600'};
  cursor: pointer;
  font-size: 16px;
  color: ${(props): string =>
    props['data-is-selected']
      ? '#2c4bff'
      : props['data-is-child']
      ? '#9daab6'
      : 'inherit'};
  padding: ${(props): string =>
    props['data-is-child'] ? '10px 24px 10px 15px' : '5px 24px 5px 15px'};
  width: 100%;
  padding: 8px 0;
  transition: all 0.1s ease-out;
`

const IconDown = styled(ChevronDown)`
  margin-left: auto;
  cursor: pointer;
  padding-right: 16px;
  opacity: 0.35;
`

const IconUp = styled(ChevronUp)`
  margin-left: auto;
  cursor: pointer;
  padding-right: 16px;
  opacity: 0.35;
`

/** The left sidebar that displays the navigation links */
class Sidebar extends React.Component {
  // @ts-expect-error TS(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  constructor(props) {
    super(props)
    this.state = {
      navigationLinks: props.navigationLinks,
    }
  }

  // @ts-expect-error TS(7006) FIXME: Parameter 'link' implicitly has an 'any' type.
  toggleNavigationLink = (link) => {
    // @ts-expect-error TS(2339) FIXME: Property 'navigationLinks' does not exist on type ... Remove this comment to see the full error message
    const { navigationLinks } = this.state

    this.setState({
      navigationLinks: helper(navigationLinks, {
        // @ts-expect-error TS(7006) FIXME: Parameter 'x' implicitly has an 'any' type.
        [navigationLinks.findIndex((x) => x.id === link.id)]: {
          isExpanded: { $set: !link.isExpanded },
        },
      }),
    })
  }

  render() {
    // @ts-expect-error TS(2339) FIXME: Property 'navigationLinks' does not exist on type ... Remove this comment to see the full error message
    const { navigationLinks } = this.state
    // @ts-expect-error TS(2339) FIXME: Property 'route' does not exist on type 'Readonly<... Remove this comment to see the full error message
    const { route } = this.props

    return (
      <SidebarWrapper>
        <SidebarList>
          {/* @ts-expect-error TS(7006) FIXME: Parameter 'link' implicitly has an 'any' type. */}
          {navigationLinks.map((link) => [
            <SidebarListItem
              isSelected={link.id === route}
              key={link.name}
              level={link.level}
              onClick={() => this.toggleNavigationLink(link)}
            >
              <SidebarListItemLink
                data-is-selected={link.id === route}
                to={`/${link.parentName}/${link.id}`}
              >
                {link.name}
              </SidebarListItemLink>
              {link.isExpanded ? (
                <IconDown color="gray" size="large" />
              ) : (
                <IconUp
                  color="gray"
                  size="large"
                  onClick={(): void => this.toggleNavigationLink(link)}
                />
              )}
            </SidebarListItem>,
            // we want to exclude children with the same name as the parent
            // no need to show those as those can be accesses by clicking on the parent
            link.children && link.isExpanded
              ? // @ts-expect-error TS(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
                link.children.map((child) =>
                  child.fileName !== child.parentName ? (
                    <SidebarListItem
                      isSelected={child.id === route}
                      key={child.name}
                      level={child.level}
                    >
                      <SidebarListItemLink
                        data-is-child
                        data-is-selected={child.id === route}
                        to={`/${child.parentName}/${child.id}`}
                      >
                        {child.name}
                      </SidebarListItemLink>
                    </SidebarListItem>
                  ) : null,
                )
              : null,
          ])}
        </SidebarList>
      </SidebarWrapper>
    )
  }
}

// @ts-expect-error TS(2339) FIXME: Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
Sidebar.propTypes = {
  /** Navigation links to display in the sidebar */
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    }),
  ).isRequired,
  route: PropTypes.string.isRequired,
}

export default Sidebar
