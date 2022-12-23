package com.Lafayette21.bankapplication.repository;

import com.Lafayette21.bankapplication.model.Account;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends Neo4jRepository<Account, Long> {
    Optional<Account> findByAccountNumber(@Param("accountNumber") Long accountNumber);
}
