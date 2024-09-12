import React from 'react';

const YoutubePlayer = ({ videoId, width = '60%' }) => {
    return ( 
        <div 
            style={{ 
                maxWidth: width, 
                margin: '0 auto', 
                position: 'relative',
                paddingTop: '56.25%', // 16:9 aspect ratio
                height: 0, 
                overflow: 'hidden',
                borderRadius: '8px', // Rounded corners for a smoother look
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add subtle shadow
            }}
        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    border: 'none', // Removes border for a cleaner look
                }}
                title={`YouTube video player for video ${videoId}`} // Improved accessibility
                loading="lazy" // Lazy loading for performance
            />
        </div>
    );
};

export default YoutubePlayer;
