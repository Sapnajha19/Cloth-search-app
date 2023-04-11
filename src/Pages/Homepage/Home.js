import React from 'react'
import "./Home.sass"
import SearchBar from '../../Components/SearchBar/SearchBar'
export default function HomePage() {
  return (
    <div className='bg-image'>
      <SearchBar className="search-bar"/>
      <img className='zevi-logo' src="https://s3-alpha-sig.figma.com/img/e844/4ff2/56f933855ffa630db6ae0594386f86a0?Expires=1682294400&Signature=kZaO-4eRee93jh-TyB9L9O~euxMx-ejp4Lu6RSh9HUPrQ~GYXqML4RE98OgxmYt6A3YS0bBfc4DbMdDLxJCXQfq36Y-cA-HEnU9xGVdfvy0vsO4Y~96uOYoMkx777FjaOg6w-bKOrzYaWQcJkY8LuMfRmYzkmDbVhFfYmDkLFK5fvilLjkOwjtdQtB87nPCrvJ~AAm1XKDHwblu5frqfHlt0IgHVamlNAqqsC3AQyVZXkRVGPU-ysgu3CkOCE0xkA3RiAetFGYfzQdt0DYCkyMmQ8VRFE1RHeMSIfsPgmrn2bGz15on6wWlOnTKtpUWlh8LxMpO~BX7AHKEMq7wwLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="logo"/>
    </div>
  )
}
