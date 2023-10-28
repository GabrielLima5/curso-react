import { useState, useEffect } from "react"
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore"

export const useFetchDocument = (docCollection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // deal with memory leak
    const [cancel, setCancel] = useState(false)

    useEffect(() => {
        async function loadDocument(){
            if (cancel) return
            
            setLoading(true)

            try{
                const docRef = await doc(db, docCollection, id)
                const docSnap = await getDoc(docRef)
                setDocument(docSnap.data())
                setLoading(false)
            } catch(e){
                console.error(e.message)
                setError(e.message)
                setLoading(false)
            }            
        }

        loadDocument()
    }, [docCollection, id, cancel])

    useEffect(() => {
        return () => setCancel(true)
    }, [])

    return { document, loading, error }
}