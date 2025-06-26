import Link from 'next/link'

interface BtnLinkProps {
   href: string
   children?: any
}

export default function BtnLink(props: BtnLinkProps) {
   return (
      <Link href={props.href}>
         <div className="bg-blue-500 rounded-lg px-4 py-2 text-base">
            {props.children}
         </div>
      </Link>
   )
}
