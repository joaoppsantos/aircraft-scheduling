const NavDate = () => {
    let currentDate = new Date();
    const displayDate = currentDate.toLocaleString('en-US', {
        weekday: 'short',
        day: 'numeric',
        year: 'numeric',
        month: 'long',
    })

    return (
        <div>
            {displayDate}
        </div>
    );
}

export default NavDate;
