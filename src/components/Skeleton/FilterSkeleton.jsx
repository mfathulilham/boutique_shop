import React from 'react';
import './FilterSkeleton.scss';

export function FilterSkeleton() {
  return (
    <>
      <div className="skeleton__header">
        <div className="skeleton skeleton-30"></div>
        <div className="skeleton skeleton-10"></div>
      </div>
      <div className="skeleton__f-list">
        <div className='skeleton__item'>
          <div className="skeleton skeleton-10"></div>
          <div className="skeleton skeleton-50"></div>
        </div>
        <div className='skeleton__item'>
          <div className="skeleton skeleton-10"></div>
          <div className="skeleton skeleton-50"></div>
        </div>
        <div className='skeleton__item'>
          <div className="skeleton skeleton-10"></div>
          <div className="skeleton skeleton-50"></div>
        </div>
        <div className='skeleton__item'>
          <div className="skeleton skeleton-10"></div>
          <div className="skeleton skeleton-50"></div>
        </div>
      </div>
    </>
  )
} 

export function RangeSkeleton() {
  return (
    <>
      <div className="skeleton__header">
        <div className="skeleton skeleton-30"></div>
        <div className="skeleton skeleton-10"></div>
      </div>
      <div className="skeleton__header-2">
        <div className="skeleton skeleton-10"></div>
        <div className="skeleton skeleton-30"></div>
      </div>
      <div className='skeleton__list'>
        <div className="skeleton skeleton-100"></div>
      </div>
      <div className='skeleton__footer'>
        <div className="skeleton skeleton-30"></div>
      </div>
    </>
  )
} 

export function ColorSkeleton() {
  return (
    <>
      <div className="skeleton__header">
        <div className="skeleton skeleton-30"></div>
        <div className="skeleton skeleton-10"></div>
      </div>
      <div className='skeleton__list-wrap'>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
        <div className="skeleton-20-ring"></div>
      </div>
    </>
  )
}