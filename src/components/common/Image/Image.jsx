import './Image.scss';

const Image = (props) => {
    const {name, alt, className, ...otherProps} = props;
    return (
        <img src={`src/assets/images/${name}.svg`} alt={alt} className={className} {...otherProps} />
    );
}

export default Image;
