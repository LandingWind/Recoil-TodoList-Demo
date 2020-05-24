const proxy = { 
    'GET /test': { aaa: 'aaa' },
    'GET /remotelistdata': {data: [
        { id: 1, label: "from remote planet", visible: true, isDone: false },
        { id: 2, label: "sing from moon", visible: true, isDone: false },
    ]}
}

module.exports = proxy;