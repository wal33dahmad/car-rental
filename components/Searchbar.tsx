'use client'

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ customClasses }: { customClasses: string }) => {
    return (
        <button type='submit' className={`-ml-3 z-10 ${customClasses}`}>
            <Image
                src='/magnifying-glass.svg'
                alt='search'
                width={40}
                height={40}
                className='object-contain'
            />
        </button>
    )
}

const Searchbar = () => {
    const router = useRouter()
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!manufacturer || !model) {
            return alert('Please fill in the searchbar')
        }

        updateSearchParams({
            manufacturer: manufacturer.toLowerCase(),
            model: model.toLowerCase()
        })
    }

    const updateSearchParams = ({ manufacturer, model }: { manufacturer: string, model: string }) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        const pathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(pathName)
    }

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton customClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image
                    src='/model-icon.png'
                    alt='car model'
                    width={25}
                    height={25}
                    className='absolute w-[20px] h-[20px] ml-4'
                />
                <input
                    type='text'
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder='Tiguan'
                    className='searchbar__input'
                />
                <SearchButton customClasses='sm:hidden' />
            </div>
            <SearchButton customClasses='max-sm:hidden' />
        </form>
    )
}

export default Searchbar