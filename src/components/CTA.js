import Resume from '../assets/img/TechResume.docx';

const CTA=()=> {
    return (
        <div className='cta'>
            <a href={Resume} download>Download Resume</a>
        </div>
    )
}
export default CTA;