

INSERT INTO drugs (d_id, name, name_code, name_generic, name_brand)
  VALUES (1234, 'Tylenol', 'Tasdsd', 'Apple', 'Banana' ),
         (1434, 'Temodil', 'Taswdsd', 'Apprle', 'Banana' ),
         (6234, 'Oplenol', 'Tasddsd', 'Apple', 'Banarna' );


INSERT INTO mechanisms (m_id, name)
VALUES  (934, 'Bloodthinner'),
        (944, 'Bloodthicker'),
        (865, 'Dilator');


INSERT INTO mechanismof (m_id, d_id)
VALUES  (934, 1234),
        (944, 1234),
        (865, 1234),
        (934, 1434),
        (934, 6234),
        (865, 6234);