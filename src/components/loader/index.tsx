import React from 'react'
import { Spinner } from './spinner'
import { cn } from '@/lib/utils'

type Props = {
    state: boolean,
    className?: string
    color?: string
    children?: React.ReactNode
}

const Loader = (props: Props) => {
    if (props.state) {
        return <div className={cn(props.className)}>
            <Spinner color={props.color}/>
        </div>
    }
    return props.children
}

export default Loader