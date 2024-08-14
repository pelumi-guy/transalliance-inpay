import { PropsWithChildren } from 'react'
import { IHighlightTag } from '../../types/components'


const HighlightTag = (props: PropsWithChildren<IHighlightTag>) => {

    const { position, children, styles, className, button } = props;

    return (
        <>
            {button ?
                (
                    <button type='button' className={`highlight-tag ${className}`} style={{ ...styles, top: position.y, left: position.x }}>
                        {children}
                    </button>
                )
                : (
                    <div className={`highlight-tag ${className}`} style={{ ...styles, top: position.y, left: position.x }}>
                        {children}
                    </div>
                )}
        </>


    )
}

export default HighlightTag