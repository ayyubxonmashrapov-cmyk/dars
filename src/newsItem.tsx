export default function NewsItem({title}) {
    return <div className="flex flex-col justify-between" style={{width: '326px', height: '251px', backgroundColor: '#1A1D1F', borderRadius: '8px', padding: '12px'}}>
        <img style={{width: '100%', height: '113px', objectFit: 'cover', borderRadius: '4px 4px 0 0'}} src="/image.png" alt="image"/>
        <p style={{color: 'rgba(247,249,250,0.4)', fontSize: '14px'}}>Sentabr 7, 2022</p>
        <h2 className="line-clamp-2" style={{fontFamily: 'Inter, system-ui', fontWeight: '600', fontSize: '14px', color: '#FFFFFF'}}>
            {title}
        </h2>
        <p className="line-clamp-2" style={{color: '#888888', fontFamily: 'Inter, system-ui', fontSize: '14px', fontWeight: '500'}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci harum laudantium
            porro
            provident repudiandae tenetur? Aperiam ducimus eaque, esse minima odit voluptatem!
        </p>
    </div>
}