import { useState } from 'react'
import { Navbar } from '../components/Navbar';
import { Content } from '../components/Content';

export function Home() {
    
    const [openMenu, changesMenu] = useState(false);

        return (
            <>
                <Navbar openMenu={changesMenu} open={openMenu}/>
                <Content />
            </>
        )
}