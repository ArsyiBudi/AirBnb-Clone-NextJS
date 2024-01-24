'use client'

import Image from "next/image";

const Avatar = () => {

    return (
        <Image className="rounded-full"
        alt="Avatar"
        height="30"
        width="30"
        src="/Image/placeholder.jpg"/>
    );
};

export default Avatar;