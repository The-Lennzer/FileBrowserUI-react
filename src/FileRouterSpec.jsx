import { useState } from 'react';
import { FolderIcon, DocumentIcon, ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import React from 'react';

const files = [
    {name: "Home",
        folders: [
            {name: "Movies",
                folders: [{name: "Old-movies",
                            folders: [{name: "Dead-poets-soceity.mp4"}, {name: "Good-will-hunting.mp4"}]
                },
                {name: "Pacific-Rim.mp4"}, {name: "The-gentlemen.mp4"}]
            },
            {name: "Music", 
                folders: [{name: "1990s", folders: [{name: "Billie jean"}]},{name: "All-the-stars.mp3"}, {name: "Am-I-dreaming.mp3"}]
            },
            {name: "Comics",
                folders: [{name: "flashpoint-pradox.cmc"}, {name: "Adventures-of-tintin.cmc"}]
            },
            {name: "Anime",
                folders: [{name: "One-piece.mp4"}, {name: "Gintama.mp4"}, {name: "Demon Slayer.mp4"}]
            },
        ]
    }
]

export default function FileRouterSpec(){   

    return (
        <div className='p-8 max-w-sm mx-auto'>
        <ul>
            { files.map((file) => (
               <Folder folder={file} />
            ))}
        </ul>
        </div>
    )
}

function Folder({folder}){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <li className='my-1.5'>
            <span className='flex items-centre gap-1.5'>
                
                {   folder.folders ? (
                    <>
                    { isOpen ? 
                        <button onClick = {() => setIsOpen((isOpen) => !isOpen)}>
                        <ChevronDownIcon className='size-4 text-grey-500' />
                        </button> 
                        : 
                        <button onClick = {() => setIsOpen((isOpen) => !isOpen)}>
                        <ChevronRightIcon className='size-4 text-grey-500' />
                        </button>
                    }
                    <FolderIcon className='size-6 text-yellow-500'/>
                    </>) :
                    ( <DocumentIcon className='size-6 text-gray-500' />)
                }
                    <p>{folder.name}</p>
            </span>
        </li>

        {isOpen && 
            <ul className='pl-6'>
            { folder.folders?.map((file) => ( 
                <Folder folder={file} /> 
            ))}
        </ul>
        }
        </>
    )
}