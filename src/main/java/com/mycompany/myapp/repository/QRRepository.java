package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.QR;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the QR entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QRRepository extends JpaRepository<QR, Long> {

}
