import Resume from '../assets/img/ClaraWongResume.pdf';

const CTA=()=> {
    return (
        <div className='cta'>
            <a href={Resume} download>Download Resume</a>
        </div>
    )
}
export default CTA;