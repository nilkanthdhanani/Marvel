import React from 'react';
import BooksHB from './booksHB';
import Adventure from './adventure';
import Roleplay from './roleplay';
import Crafts from './crafts';
import Redeem from '../news/redeem';
import ProseNovels from './adventure/proseNovels';
import SpecialtyBooks from './adventure/specialtyBooks';
import BookCollections from './adventure/bookCollections';

export default function Books() {
    return (
        <>
            <BooksHB />
            <Adventure />
            <Roleplay />
            <Crafts />
            <ProseNovels />
            <SpecialtyBooks />
            <BookCollections />
            <Redeem />
        </>
    )
}
