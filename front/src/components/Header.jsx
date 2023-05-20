export default function Header({ onChildClick }) {
    
    
    const storedData = JSON.parse(localStorage.getItem('myData'));

    const handleClick = (num) => {
        // Emitir evento al hacer clic en el componente hijo
        onChildClick(num);
      };
    return (
        <header className="bg-white">
            <nav className="flex items-center justify-around p-6 " aria-label="Global">
                <div className="">
                    <a className="-m-1.5 p-1.5">
                        <span className="sr-only">Domina</span>
                        <img className="h-8 w-auto" src="../../public/domina.png" alt="" />
                    </a>
                </div>

                <a onClick={() => handleClick(1)} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    GetTask
                </a>
                <a onClick={() => handleClick(2)} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
                    CreateTask
                </a>
                <div className="">
                <a className="text-sm font-semibold leading-6 text-gray-900 mr-2">
                    {storedData.name}
                </a>
                    <a href="/login" className="text-sm font-semibold leading-6 text-gray-900">
                        Log on <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}