import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement;
    styleLink: string;
    activeClassName: string;
}

export function ActiveLink({ children, styleLink, activeClassName, ...rest }: ActiveLinkProps){
    const { asPath } = useRouter();

    return(
        <Link href={rest.href} className={`${styleLink} ${asPath === rest.href?activeClassName:''}`}>
            {children}
        </Link>
    )
}