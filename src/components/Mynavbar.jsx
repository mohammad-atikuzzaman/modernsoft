import Image from 'next/image';
import React from 'react';
import Mobilemenu from './Mobilemenu';
import Desktopmenu from './Desktopmenu';
import Link from 'next/link';

const Mynavbar = () => {
    return (
        <nav className="flex justify-between items-center py-4 shadow-md relative px-2 rounded-xl">
            <Link href="/" className="rounded-full overflow-hidden">
                <Image src="/logo/modernsoft.png" alt="modernsoft" height={56} width={56} />
            </Link>

            {/* menu for desktop, laptop and tablet */}
            <Desktopmenu/>
            {/* menu for mobile device */}
            <Mobilemenu />
        </nav>
    );
};

export default Mynavbar;