package com.xzs.booksspringboot.repository;

import com.xzs.booksspringboot.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book,Integer> {
}
