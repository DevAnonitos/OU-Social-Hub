import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../ui/breadcrumb';
import { BreadcrumbProps } from '@/types';

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <Breadcrumb>
    {items.map((item, index) => (
      <BreadcrumbItem key={index}>
        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
        {index < items.length - 1 && <BreadcrumbSeparator />}
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);

export default CustomBreadcrumb;