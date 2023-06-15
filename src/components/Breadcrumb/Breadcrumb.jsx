import React from 'react';
import './Breadcrumb.scss';

const BreadcrumbItem = ({ children, ...props }) => (
  <li className='breadcrumb__item' {...props}>
    {children}
  </li>
)

const Breadcrumb = (props) => {
  let children = React.Children.toArray(props.children)

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb__item${index}`}>{child}</BreadcrumbItem>
  ))

  const lastIndex = children.length - 1;

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
      acc.push(child, '|')
    } else {
      acc.push(child)
    }
    return acc
  }, [])

  return <ol className='breadcrumb'>{children}</ol>
}

export default Breadcrumb