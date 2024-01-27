"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'

const Navbar = () => {
    let pathname = usePathname();
    const [search, setSearch] = useState('')

    const handleChange = (e: any) => {
        setSearch(e.target.value)
    }

    const clearSearch = (e: any) => {
        setSearch("");
    }
    useEffect(() => {

    }, [search])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand text-danger fw-bold flex-grow-1" href="/">Sacchi Khabar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname == '/trending' && 'active'} `} aria-current="page" href="/trending">Trending</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname == '/sports' && 'active'} `} href="/sports">Sport</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/tech" className={`nav-link ${pathname == '/tech' && 'active'} `}>Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${pathname == '/health' && 'active'} `} href={'/health'}>Health</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" value={search} onChange={handleChange} type="text" placeholder="Search Keywords" aria-label="Search" />
                        <Link href={(search ? `/search/${search}` : `/`)} onClick={clearSearch} className="btn btn-outline-dark" >Search</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar