import React from 'react';

const NotFound = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-10">404 - Not Found</h1>
            <p className="text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <div className="flex justify-center mt-6">
                <a href="/" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Evine dön
                </a>
            </div>
        </div>
    );
}

export default NotFound;
