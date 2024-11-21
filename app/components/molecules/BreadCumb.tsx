import React from 'react'
import Link from 'next/link'
import { Rubik } from 'next/font/google'
const rubick = Rubik({
   subsets: ['latin'],
   weight: ['400', '500'],
   variable: '--font-rubick',
})

interface BreadCumbsProp {
   breadCumbMenu: { label: string; url: string }[]
   contact?: boolean
}

const BreadCumb = ({ breadCumbMenu, contact }: BreadCumbsProp) => {
   return (
      <div className={`BreadCumbs${contact && 'contact'}`}>
         <ul className={`BreadCumbs-list`}>
            <li className={'BreadCumbs-li'}>
               <Link href={'/'} className={`${rubick.className} font-normal`}>
                  Home
               </Link>
            </li>
            {breadCumbMenu?.map(({ label, url }) => (
               <li className={'BreadCumbs-li'} key={url}>
                  <Link href={url} className={`${rubick.className}`}>
                     {label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default BreadCumb
