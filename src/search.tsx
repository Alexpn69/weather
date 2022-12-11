import { ChangeEvent } from "react";
import {optionType} from './types'

type Props = {
    term: string,
    options: [],
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void,
    onOptionSelect: (option: optionType)=> void,
    onSubmit: () => void
}

const Search = ({
    term, 
    options,
    forecast, 
    onInputChange, 
    onOptionSelect, 
    onSubmit }: Props): JSX.Element => {
    return (
        <>
        <main className={forecast ? 'flex justify-center items-center bg-blue-400 w-full z-10'
: 'flex justify-center items-center bg-blue-400 w-full h-[100vh]'}>
        
        <section className=
      {forecast 
      ?  'bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg w-full md:max-w-[400px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[400px] text-zinc-700'
    :  'bg-white bg-opacity-40 backdrop-blur-lg drop-shadow-lg w-full md:max-w-[400px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[400px] text-zinc-700 rounded-md'}>
        
        <h1 className='text-4xl font-thin'>Weather <span className='font-black'>forecast</span> </h1>
        <p className='text-sm mt-2'>
          Enter below a place you want to know the weather of and select an option from the dropdawn
        </p>
        <div className="flex relative mt-10 md:mt-4 z-10">
        <input 
        type="text" 
        value={term}
        className='px-2 py-1 rounded-l-md border-2 border-white '
        onChange={onInputChange}/>  
        
        <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
          {options.map((option: optionType, index: number) => 
          (<li key={option.name + '-' + index}>
            <button 
            className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer'
            onClick={() => onOptionSelect(option)}>
         {option.name}, {option.country}
            </button>
           </li>))}
          </ul>
        
        <button className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500
        hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer'
        onClick={onSubmit}>
        Search
        </button> 
        </div>
        </section>
        
        </main>
        </>
          )
        }
        

 
export default Search;