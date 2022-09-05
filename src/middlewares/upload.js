import multer from "multer"

const fileFilter = (req, file, cb) => {
    if(req.file.mimeType === 'image/jpeg' || req.file.mimeType === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/')
    }, 
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
    },
    fileFilter: fileFilter
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

export { upload }