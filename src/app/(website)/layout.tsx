import React from 'react'
import LandingPageNavBar from './_components/navbar';


type Props = {
    children: React.ReactNode
};


export default function Layout({ children }: Props) {
    return (
        <div className="flex flex-col item py-10 px-10 xl:px-0 container">
            <LandingPageNavBar />
            {children}
        </div>
    )
}