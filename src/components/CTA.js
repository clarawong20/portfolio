import Resume from '../assets/img/ClaraWongResume2.pdf';

const CTA=()=> {
    return (
        <a href={Resume} download>
        <div className='cta'>
             <button>Download Resume</button>
        </div>
    </a>
    )
}
export default CTA;