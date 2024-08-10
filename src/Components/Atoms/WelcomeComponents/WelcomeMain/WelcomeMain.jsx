import ImageGallery from '../../../Molecules/ImageGallery/ImageGallery';

function MiniMain() {
    return (
        <div>
            <section className='ImageGallery'>
                <ImageGallery />
            </section>
            <section className='location'></section>
            <aside>
                <h2>Informacion</h2>
                <p>Correo</p>
                <p>Telefono</p>
                <p>Direccion</p>
            </aside>
        </div>
    );
}

export default MiniMain;